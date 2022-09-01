const loadPhones = async(searchText) =>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayPhones(data.data);
}

const displayPhones = Phones => {
    const PhonesContainer = document.getElementById('Phones-container');
    PhonesContainer.textContent='';
    Phones.forEach(Phone =>{
        const phonesDiv = document.createElement('div');
        phonesDiv.classList.add('col');
        phonesDiv.innerHTML =`
        <div class="card p-4">
        <img src="${Phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${Phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>`; 
    PhonesContainer.appendChild(phonesDiv);
    })
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
})

loadPhones();