<script setup>
import { ref, reactive, computed } from "vue";
const onNightMode = ref(false);
const textSettings = reactive({
	name: "Hello World",
	size: '5',
	color: 'black',
	weight: '700'
});

const changeDisplayMode = () => {
	onNightMode.value = !onNightMode.value;
}

const textStyles = computed(() => ({
	fontSize: textSettings.size + 'rem',
	color: textSettings.color,
	fontWeight: textSettings.weight
})) 
</script>

<template>
<div class="h-screen bg-gray-200">
	<div>
		<div class="w-full flex items-center justify-center h-[24rem] overflow-x-auto">
			<p :style="textStyles" class="">{{ textSettings.name }}</p>
		</div>

		<div class="w-full bg-white py-20 px-5 flex">
			<div>
				<input type="number" v-model="textSettings.size">
			</div>
			<input type="color" v-model="textSettings.color">
			<input type="range" v-model="textSettings.weight" min="200" max="1000">
		</div>
	</div>
</div>
</template>