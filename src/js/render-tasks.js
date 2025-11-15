import { addTask, deleteTask, saveToLS, loadFromLS } from "./markup-tasks.js";
import { refs } from "./refs.js";

refs.headerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(refs.headerForm);
    const itemInfo = Object.fromEntries(formData.entries());
    addTask(itemInfo.taskName, itemInfo.taskDescription);
    refs.headerForm.reset();
});

refs.deleteBtn.addEventListener('click', () => {
    
})