const BASE_URL = 'http://localhost:3030/projects/';

export async function createProject(payload) {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    if (response.status !== 200) {
        throw new Error('Failed to create a project!');
    }

    const result = await response.json();
    return result;
}

export async function getProjectById(projectId) {
    const response = await fetch(BASE_URL + projectId);

    if (response.status !== 200) {
        throw new Error('Failed to get a project!');
    }

    const data = await response.json();
    return data;
}

export async function getAllProjects() {
    const response = await fetch(BASE_URL + 'all');

    if (response.status !== 200) {
        throw new Error('Failed to get all projects!');
    }

    const data = await response.json();
    return data;
}

export async function updateProject(projectId, payload) {
    const response = await fetch(BASE_URL + projectId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    if (response.status !== 200) {
        throw new Error('Failed to update project!');
    }
}

export async function deleteProject(projectId) {
    const response = await fetch(BASE_URL + projectId, {
        method: 'DELETE'
    });

    if (response.status !== 204) {
        throw new Error('Failed to delete project!');
    }
}