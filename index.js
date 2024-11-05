// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
	for (const value of values) {
		await new Promise((resolve) =>
			setTimeout(resolve, 1000)
		); // Wait 1 second
		console.log(value); // Log each value
	}
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);

// Task 02 & Task 03: Awaiting a Call and Handling Errors
async function awaitCall() {
	try {
		// Simulate an API call with a delay
		const response = await new Promise(
			(resolve, reject) => {
				setTimeout(() => {
					// Uncomment the line below to simulate an error:
					// reject(new Error("Failed to fetch data"));
					resolve({ data: "Sample data from API" });
				}, 1000);
			}
		);

		// Log the response data
		console.log("Data fetched:", response.data);
	} catch (error) {
		// Log a user-friendly message
		console.error("Error occurred:", error.message);
	}
}

// Example usage:
awaitCall();
