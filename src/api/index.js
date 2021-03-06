const urlBase = "http://localhost:3001";

const urlCustomers = `${urlBase}/customers`;
const headers = new Headers({
    'Content-type': 'application/json'
});

const commonResponseHandler = response => {
    if(response.error) {
        return Promise.reject(response.validation);
    }

    return response;
};

export const getCustomers = () => fetch(urlCustomers).then(res => res.json());

export const putCustomer = (id, customer) => fetch(`${urlCustomers}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(customer),
    headers
})
.then(res => res.json())
.then(commonResponseHandler);

export const postCustomer = customer => fetch(`${urlCustomers}`, {
    method: 'POST',
    body: JSON.stringify(customer),
    headers
})
.then(res => res.json())
.then(commonResponseHandler);

export const delCustomer = id => fetch(`${urlCustomers}/${id}`, {
    method: 'DELETE',
    headers
})
.then(res => res.json())
.then(response => {
    if(response.error) {
        return Promise.reject(response.validation);
    }

    return id;
});