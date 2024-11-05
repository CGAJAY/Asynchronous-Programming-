// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
	for (const value of values) {
		await new Promise((resolve) =>
			setTimeout(resolve, 1000)
		); // Wait 1 second
		console.log(value); // Log each value
	}
}
