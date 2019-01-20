const copyrightText = document.querySelector('.copyright');
const currentDate = Date.now();
copyrightText.innerHTML = `Copyright &copy; 2012 - ${new Date().getFullYear()} Dropped Bits, Inc.`