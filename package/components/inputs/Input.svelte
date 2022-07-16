<script>import { isEnter } from "../../utils/util";
export let value = "";
export let disabled = false;
export let onChange = () => { };
export let onEnter = () => { };
export let validator = async () => [];
let errors = [];
let validating = false;
async function onEnter_(evt) {
    if (isEnter(evt)) {
        evt?.preventDefault?.();
        onEnter();
        await validate();
    }
}
async function onChange_(evt) {
    await onChange(evt);
}
async function validate() {
    try {
        validating = true;
        errors = (await validator()) ?? [];
    }
    catch (err) {
        console.error(`❌ Smth went wrong in validate in the input: ${err}`);
    }
    finally {
        validating = false;
    }
}
function typeAction(node) {
    // Change type dynamically if needed
    node.type = type;
}
</script>

<div class={`${$$props.class} w-full flex flex-col flex-nowrap justify-center`}>
  <input
    bind:value
    on:blur={validate}
    on:change={onChange_}
    on:keypress={onEnter_}
    disabled={disabled || validating}
    use:typeAction
    {...$$props}
    class="w-full"
  />
  {#each errors as errorMsg}
    <span class="mt-sm text-red">{errorMsg}</span>
  {/each}
</div>
