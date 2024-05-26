export function handleImage(e, setImage) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e) {
      setImage(e.target.result);
    };
  }

  e.target.value = "";
}
