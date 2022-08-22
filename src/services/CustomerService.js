import axiosInstance from "../helpers/Axios";

export const CustomerService = {
    getCustomer,
    addCustomer,
    deleteCustomer,
    updateCustomer,
};

function getCustomer() {
    const accessToken = localStorage.getItem("access_token");
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
    const accessToken = localStorage.getItem("access_token");
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
    const accessToken = localStorage.getItem("access_token");
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
    const accessToken = localStorage.getItem("access_token");
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
