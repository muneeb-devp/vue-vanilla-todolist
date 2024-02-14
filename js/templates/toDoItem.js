/* 
     template is JSX  

     React Component 
     jsx + data
*/
import { toElement } from './../utils/toElement'

function toDoItemTemplate({ i, obj: todo }) {
  const template = `
    <section class="bg-white-50 shadow-md  rounded border-l-4 border-green-600 shadow-sm p-4 my-4">
       <p class="text-green-600 font-bold "><span class="text-sm">${
         i + 1
       }.<span class="text-lg"> ${todo.todo}<p>
       <p class="text-sm ml-8">
            <span class="font-semibold"> status </span> :   ${todo.status} 
       </p>
       <p class="text-sm ml-8">
            <span class="font-semibold"> category </span> :   ${todo.category} 
       </p>
   </section>
    `

  return toElement(template)
}

export { toDoItemTemplate }
