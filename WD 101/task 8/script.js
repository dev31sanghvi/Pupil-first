const form = document.getElementById('form');

const retrieveEntries = () => {
    let entries = localStorage.getItem("entries");
    if(entries){
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}
let entries = retrieveEntries();

const displayEntries = () => {
    const entries = retrieveEntries();
    const tableEntries = entries.map((entry)=>{
        const nameCell = `<td class = 'border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class = 'border px-4 py-2'>${entry.email}</td>`;
        const passwordCell = `<td class = 'border px-4 py-2'>${entry.password}</td>`;
        const dobCell = `<td class = 'border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsCell = `<td class = 'border px-4 py-2'>${entry.acceptedTC}</td>`;

        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;
    }).join("\n");

    const table = `<table class="table-auto w-full"><tr>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Email</th>
                    <th class="px-4 py-2">Password</th>
                    <th class="px-4 py-2">Dob</th>
                    <th class="px-4 py-2">Accepted Terms?</th>
                    </tr>${tableEntries} </table>`;

    let details = document.getElementById("user-entries");
    details.innerHTML = table;
}

const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTC = document.getElementById('acceptTerms').checked;

    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTC
    };
    entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(entries));
    displayEntries();
}

form.addEventListener('submit', saveUserForm);
displayEntries();