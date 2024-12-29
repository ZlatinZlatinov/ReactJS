const BASE_URL = 'http://localhost:3030/tasks/';

export async function addTask(projectId, payload) {
    const response = await fetch(BASE_URL + projectId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    if (response.status !== 200) {
        throw new Error('Failed to add task!');
    }

    const data = await response.json();
    return data;
} 

export async function clearTask(taksId) {
    const response = await fetch(BASE_URL + taksId, {
        method: 'DELETE'
    });

    if (response.status !== 204) {
        throw new Error('Failed to delete task!');
    }
}