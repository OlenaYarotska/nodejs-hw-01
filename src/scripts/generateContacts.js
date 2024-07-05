import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        let data;
        try {
            data = await fs.readFile(PATH_DB, 'utf8');
        } catch (error) {
            console.error(error);
            data = [];
        }

        let contacts;
        try {
            contacts = JSON.parse(data);
            if (!Array.isArray(contacts)) {
                throw new Error('Data is not an array');
            }
        } catch (error) {
            console.error(error);
            contacts = [];
        }
        const newContacts = Array.from({ length: number }, createFakeContact);
        contacts = [...contacts, ...newContacts];

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    } catch (error) {
        console.error(error);
    }
};

generateContacts(5);
