//script to get my github repositories
async function loadGitRepositories() {
  const listRepositories = document.getElementById("list");

  try {
    const response = await fetch(
      "https://api.github.com/users/miguelsacardo/repos"
    );

    // throw a  window alert if the repositories don't load
    if (!response.ok)
      window.alert("Falha ao carrergar os repositórios do github.");

    const repositories = await response.json();
    repositories.forEach((repository) => {
      // if repository description == null,
      //  put a declaration text for better understanding
      if (repository.description == null) {
        repository.description = "O repositório não tem descrição.";
      }
      const html = `<div class="card-repository">
                        <h3><a href="https://github.com/miguelsacardo/${
                          repository.name
                        }" target="_blank">${repository.name.toUpperCase()}</a></h3> 
                        <p>${repository.description}</p>        
                        </div>`;
      listRepositories.innerHTML += html;
    });
  } catch (error) {
    console.error(error);
  }
}

loadGitRepositories();
