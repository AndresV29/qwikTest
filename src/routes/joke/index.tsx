import { component$ } from '@builder.io/qwik';
 //each routes index needs to export a default component
export default component$(() => {
  return (<>
  <section class="section bright">A Joke!</section>
  <MyConponent />
  </>);
});

const MyConponent = component$(() =>{
    return <h1>This one I made</h1>
})
//new components are consts that are later called into the default