import { useEffect, useState } from "react";
import { CustomerService } from "../services/CustomerService";

const useCustomers = (refresh) => {
    const [customer, setCustomer] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        CustomerService.getCustomer()
            .then((response) => {
                const { data } = response.data;
                setCustomer(data);
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            })
            .finally(() => setLoading(false));
    }, [refresh]);

    return { loading, customer };
};

export default useCustomers;
