export async function getUsers(login) {
  const response = await fetch(
    `https://api.github.com/search/users?q=${login} in:login&sort=repositories&order=desc`
  );

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function getUserInfo(url) {
  const response = await fetch(`${url}`);

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}
