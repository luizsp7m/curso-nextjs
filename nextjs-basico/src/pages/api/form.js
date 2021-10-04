let users = [];

export default async function Users(request, response) {
  if(request.method === 'GET') {
    return response.status(200).json({
      users,
    });
  }

  if(request.method === 'POST') {
    const data = JSON.parse(request.body);
    users.push(data);
    return response.status(200).json({
      users
    });
  }
}