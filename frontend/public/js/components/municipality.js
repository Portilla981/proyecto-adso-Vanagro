document.addEventListener('DOMContentLoaded', function () {
    const deparmentSelect = document.querySelector('.department');
    const municipalitySelect = document.querySelector('.municipality');

if (!deparmentSelect){
    fetch("/frontend/public/views/components/create-producter.html")
    console.error("No se encontro departamento")
    return;
}

let municipalityDepartment = {};

fetch("/frontend/public/data/departments.json")

    .then(response => response.json())
    .then(data => {
        municipalityDepartment = data;
    })
    .catch(error => console.error("error cargando los datos:", error) );

deparmentSelect.addEventListener('change', () =>{
    const department = deparmentSelect.value;
    municipalitySelect.innerHtml = '<option value="">Seleccione municipio</option>';

    if (department && municipalityDepartment[department]){
        const municipality = municipalityDepartment[department];
        municipality.forEach(municipio => {
            const option = document.createElement('option');
            option.value= municipio;
            option.text = municipio;
            municipalitySelect.add(option);
            
        });
    }


});

});