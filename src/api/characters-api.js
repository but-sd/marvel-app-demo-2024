import characters from '../data/characters.json'

/**
 * List of characters
 * @returns {Array} characters
 */
export const getCharacters = (orderBy = 'name', order = 'asc') => {
    // Sort characters by name
    let sortedCharacters = characters.sort((a, b) => {
        if (orderBy === 'name') {
            return a.name.localeCompare(b.name)
        } else {
            throw new Error(`Cannot order by ${orderBy}`)
        }
    });

    // Reverse the order if it's descending
    if (order === 'desc') {
        sortedCharacters = sortedCharacters.reverse();
    }
    return sortedCharacters;
}

/**
 * Get a character by id
 * @param {number} id
 * @returns {Object} character
 */
export const getCharacterById = (id) => {
    const character = characters.find(character => character.id === id);
    if (!character) {
        throw new Error(`Character with id ${id} not found`);
    }
    return character;
}