export function addTask(title, text) {
    const list = document.querySelector(".tasks-list");
    const markup = `<li class="task-list-item">
                        <button class="task-list-item-btn">Delete</button>
                        <h3>${title}</h3>
                        <p>${text}</p>
                    </li>`;
    list.insertAdjacentHTML('beforeend', markup);
};


export function deleteTask(task) {
    task.remove();
}

export function saveToLS(key, value) {
  const formatedValue = JSON.stringify(value);
  localStorage.setItem(key, formatedValue);
}

export function loadFromLS(key) {
  const item = localStorage.getItem(key);
  try {
    const value = JSON.parse(item);
    return value;
  } catch {
    return item;
  }
}

