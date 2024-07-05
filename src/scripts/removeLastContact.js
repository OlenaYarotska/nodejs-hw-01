import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const parsedData = JSON.parse(data);
        if (parsedData.length > 0) {
           parsedData.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf8');
        } else {
            console.log("Array is empty");
        }
    } catch (error) {
        console.error(error);
    }
};

removeLastContact();
