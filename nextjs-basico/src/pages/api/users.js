export default async function Users(request, response) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await result.json();

  return response.status(200).json({
    users: data,
    method: request.method,
  });
}