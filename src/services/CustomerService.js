import axiosInstance from "../helpers/Axios";
const accessToken = localStorage.getItem("access_token");

export const CustomerService = {
    getCustomer,
    addCustomer,
    deleteCustomer,
    updateCustomer,
};

function getCustomer() {
    return axiosInstance("https://mitramas-test.herokuapp.com/customers").get(
        "",
        {
            headers: {
                Authorization: accessToken,
            },
        }
    );
}

function addCustomer(values) {
    const { name, address, country, phone_number, job_title, status } = values;
    let dataCustomer = {
        name,
        address,
        country,
        phone_number,
        job_title,
        status,
    };

    return axiosInstance("https://mitramas-test.herokuapp.com/customers").post(
        "",
        dataCustomer,
        {
            headers: {
                Authorization: accessToken,
            },
        }
    );
}

function deleteCustomer(id) {
    return axiosInstance(
        "https://mitramas-test.herokuapp.com/customers"
    ).delete("", {
        headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
        },
        data: {
            id,
        },
    });
}

function updateCustomer(values) {
    const { id, name, address, country, phone_number, job_title, status } =
        values;
    let dataCustomer = {
        id,
        name,
        address,
        country,
        phone_number,
        job_title,
        status,
    };
    return axiosInstance("https://mitramas-test.herokuapp.com/customers").put(
        "",
        dataCustomer,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: accessToken,
            },
        }
    );
}
