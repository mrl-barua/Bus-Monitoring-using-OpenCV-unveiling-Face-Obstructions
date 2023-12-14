// worker.js

// Listen for messages from the main thread
self.onmessage = function (event) {
    // Retrieve data from the main thread
    const data = event.data;

    // Perform computations or tasks here
    // Example: Simulate a time-consuming task
    const result = simulateTask(data);

    // Send the result back to the main thread
    self.postMessage(result);
};

function simulateTask(data) {
    // Simulate a time-consuming task
    // Replace this with your actual heavy computations
    let result = 0;
    for (let i = 0; i < data; i++) {
        result += i;
    }
    return result;
}
