export function handleText(e, setPostText, textareaRef) {
  setPostText(e.target.value);
  adjustTextareaHeight(textareaRef);
}

function adjustTextareaHeight(textareaRef) {
  const textarea = textareaRef.current;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}
