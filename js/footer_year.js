document.addEventListener('DOMContentLoaded', function() {
    const current_year_footer = document.getElementById('current-year');
    if(current_year_footer){
        current_year_footer.textContent = new Date().getFullYear();
    }
})