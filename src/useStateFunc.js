/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */


// This is the dispatch function that is returned by the useState hook.
// It takes three arguments, the current fiber, the state queue, and the new action.
function dispatchSetState(fiber, queue, action) {
  // Check for a second callback function and throw an error if present
  {
    if (typeof arguments[3] === 'function') {
      error("State updates from the useState() and useReducer() Hooks don't support the " + 'second callback argument. To execute a side effect after ' + 'rendering, declare it in the component body with useEffect().');
    }
  }

  // Request an update lane for this fiber
  var lane = requestUpdateLane(fiber);

  // Create an update object to hold the new state information
  var update = {
    lane: lane,
    action: action,
    hasEagerState: false,
    eagerState: null,
    next: null
  };

  // If we are in the render phase, enqueue the update
  if (isRenderPhaseUpdate(fiber)) {
    enqueueRenderPhaseUpdate(queue, update);
  } else {
    // If not in the render phase, check if the queue is currently empty
    var alternate = fiber.alternate;
    if (fiber.lanes === NoLanes && (alternate === null || alternate.lanes === NoLanes)) {
      // If the queue is empty, we can compute the next state before rendering
      // and bail out if the new state is the same as the current state.
      var lastRenderedReducer = queue.lastRenderedReducer;

      if (lastRenderedReducer !== null) {
        var prevDispatcher;

        {
          prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
        }

        try {
          var currentState = queue.lastRenderedState;
          var eagerState = lastRenderedReducer(currentState, action);

          // If the reducer hasn't changed, we can use the eagerly computed state
          // without calling the reducer again.
          update.hasEagerState = true;
          update.eagerState = eagerState;

          // If the new state is the same as the current state, we can bail out without rendering
          if (objectIs(eagerState, currentState)) {
            enqueueConcurrentHookUpdateAndEagerlyBailout(fiber, queue, update, lane);
            return;
          }
        } catch (error) {
          // Suppress the error. It will throw again in the render phase.
        } finally {
          {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        }
      }
    }

    // Enqueue the update and schedule a re-render on the root if necessary
    var root = enqueueConcurrentHookUpdate(fiber, queue, update, lane);

    if (root !== null) {
      var eventTime = requestEventTime();
      scheduleUpdateOnFiber(root, fiber, lane, eventTime);
      entangleTransitionUpdate(root, queue, lane);
    }
  }

  // Mark the update in the dev tools
  markUpdateInDevTools(fiber, lane);
}