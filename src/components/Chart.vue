<template>
    <div>
        <svg class="w-32 h-32" viewBox="0 0 24 24">
            <!-- Background circle -->
            <circle cx="12" cy="12" r="10" fill="#f0f0f0"></circle>
            <!-- Donut slices -->
            <circle cx="12" cy="12" r="10" fill="transparent" stroke="#f39c12" stroke-width="3" stroke-dasharray="50 50" transform="rotate(-90 12 12)" @mouseover="showValue('Slice 1', '#f39c12', 50)" @mouseleave="hideValue"></circle>
            <circle cx="12" cy="12" r="10" fill="transparent" stroke="#3498db" stroke-width="3" stroke-dasharray="25 75" stroke-dashoffset="50" transform="rotate(-40 12 12)" @mouseover="showValue('Slice 2', '#3498db', 25)" @mouseleave="hideValue"></circle>
            <circle cx="12" cy="12" r="10" fill="transparent" stroke="#e74c3c" stroke-width="3" stroke-dasharray="70 30" stroke-dashoffset="75" transform="rotate(50 12 12)" @mouseover="showValue('Slice 3', '#e74c3c', 30)" @mouseleave="hideValue"></circle>
            <!-- Additional slices -->
            <circle cx="12" cy="12" r="10" fill="transparent" stroke="#2ecc71" stroke-width="3" stroke-dasharray="15 85" transform="rotate(120 12 12)" @mouseover="showValue('Slice 4', '#2ecc71', 15)" @mouseleave="hideValue"></circle>
            <circle cx="12" cy="12" r="10" fill="transparent" stroke="#9b59b6" stroke-width="3" stroke-dasharray="45 55" transform="rotate(180 12 12)" @mouseover="showValue('Slice 5', '#9b59b6', 45)" @mouseleave="hideValue"></circle>
        </svg>
        <div id="sliceValue" style="position: absolute; top: 10px; left: 10px; background-color: white; padding: 5px; display: none;"></div>
    </div>
</template>

<script>
export default {
    methods: {
        showValue(name, color, percentage) {
            const sliceValueDiv = document.getElementById('sliceValue');
            sliceValueDiv.innerHTML = `
                <div style="color: ${color};">${name}: ${percentage}%</div>
            `;
            sliceValueDiv.style.display = 'block';
        },
        hideValue() {
            document.getElementById('sliceValue').innerHTML = '';
            document.getElementById('sliceValue').style.display = 'none';
        }
    }
}
</script>

<style scoped>
    /* Add any necessary styling for sliceValue here */
</style>
