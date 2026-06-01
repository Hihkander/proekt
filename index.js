document.addEventListener('DOMContentLoaded', () => {
  const clearButton = document.getElementById('clearButton');
  const textarea = document.getElementById('myTextarea');

  if (clearButton && textarea) {
      clearButton.addEventListener('click', function() {
          textarea.value = '';
      });
  }
});
const downloadButton = document.getElementById('downloadButton');
const textarea = document.getElementById('myTextarea');

downloadButton.addEventListener('click', () => {
    // 1. Получаем текст из textarea
    const text = textarea.value;

    // 2. Проверяем, что текст не пустой
    if (!text.trim()) {
        alert('В заметке ничего нет!');
        return;
    }

    // 3. Создаем объект Blob (бинарный большой объект)
    // 'text/plain' - указываем тип содержимого (обычный текст)
    const blob = new Blob([text], { type: 'text/plain' });

    // 4. Создаем временную ссылку для скачивания
    const url = URL.createObjectURL(blob);

    // 5. Создаем скрытый тег <a>
    const a = document.createElement('a');
    a.href = url;
    
    // 6. Задаем имя файла (с расширением .txt)
    a.download = 'moya-zametka.txt'; 

    // 7. Програмно нажимаем на ссылку
    a.click();

    // 8. Очищаем память, удаляя временную ссылку
    URL.revokeObjectURL(url);
});
// Находим кнопку и контейнер с textarea
const newNoteButton = document.querySelector('.newzm'); // Кнопка "Новая заметка"
const textareaContainer = document.querySelector('.tx'); // Блок с textarea

// Проверяем, что элементы найдены
if (newNoteButton && textareaContainer) {
    // Добавляем обработчик события на кнопку
    newNoteButton.addEventListener('click', function() {
        // При каждом клике класс 'visible' будет либо добавляться, либо удаляться
        textareaContainer.classList.toggle('visible');
    });
}
