export default function AddProject() {
    return (<section>
        <h2>Add new project</h2>

        <form action="">
        <div>
            <button>Cancel</button>
            <button>Save</button>
        </div> 

        <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
        </div> 

        <div>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description"></textarea>
        </div> 

        <div>
            <label htmlFor="dueDate">Due Date</label> 
            <input type="date" name="dueDate" id="dueDate" />
        </div>
        </form> 


    </section>);
}