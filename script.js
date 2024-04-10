function changeIcon() {
    var icon = document.getElementById('iconImage');
    if (icon.src.endsWith('stone.jpg')) {
      icon.src = 'nastarr.jpg';
    } else {
      icon.src = 'stone.jpg';
    }
  }
  