//Mengubah huruf pertama dari paragraph dan huruf pertama setelah tanda baca titik menjadi huruf besar
//Ini baru bisa ubar huruf pertama pada paragraf.

//paragraph 1
let paragraph1 = `A Git Workflow is a recipe or recommendation for how to use Git to accomplish work in a consistent and productive manner. Git workflows encourage users to leverage Git effectively and consistently.Git offers a lot of flexibility in how users manage changes.Given Git's focus on flexibility, there is no standardized process on how to interact with Git. When working with a team on a Git managed project, it’s important to make sure the team is all in agreement on how the flow of changes will be applied. To ensure the team is on the same page, an agreed upon Git workflow should be developed or selected. There are several publicized Git workflows that may be a good fit for your team. Here, we’ll be discussing some of these workflow options.
The array of possible workflows can make it hard to know where to begin when implementing Git in the workplace.This page provides a starting point by surveying the most common Git workflows for software teams. As you read through, remember that these workflows are designed to be guidelines rather than concrete rules. We want to show you what’s possible, so you can mix and match aspects from different workflows to suit your individual needs.`

function convertUpperCase(paragraph1){
    return paragraph1[0].toUpperCase() + paragraph1.slice(1);
}

console.log(convertUpperCase(paragraph1));

//paragraph 2
let paragraph2 = `Before the developer can publish their feature, they need to fetch the updated central commits and rebase their changes on top of them. This is like saying, “I want to add my changes to what everyone else has already done.” The result is a perfectly linear history, just like in traditional SVN workflows.`

function convertUpperCase(paragraph2){
    return paragraph2[0].toUpperCase() + paragraph2.slice(1);
}

console.log(convertUpperCase(paragraph2)); 