document.getElementById('todoForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task === "") return;
  
    const li = document.createElement('li');
  
    const span = document.createElement('span');
    span.textContent = task;
  
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = () => {
      li.classList.toggle('completed');
    };
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      li.style.transition = 'opacity 0.4s ease';
      li.style.opacity = 0;
      setTimeout(() => li.remove(), 400);
    };
  
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
  
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
  });
  