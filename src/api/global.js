const apiUrl = 'https://api.coinpaprika.com/v1';

export const getGlobalData = async () => {
    const responce = await fetch(`${apiUrl}/global`);

    const data = await responce.json();

    if (!responce.ok) {
        throw new Error(data?.error || "Fetch global data failed")
    }

    return data;

    };
