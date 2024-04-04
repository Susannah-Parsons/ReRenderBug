"use server";

function fakeAPICall() {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      const results = [
        "Result 1",
        "Result 2",
        "Result 3",
        "Result 4",
        "Result 5",
      ];
      resolve(results);
    }, 1000);
  });
}

export async function getResults() {
  return fakeAPICall();
}
