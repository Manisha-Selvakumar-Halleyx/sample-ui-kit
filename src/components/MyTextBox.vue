<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue?: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  disabled?: boolean;
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  label: "",
  placeholder: "",
  type: "text",
  disabled: false,
  error: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const value = computed({
  get: () => props.modelValue,
  set: (val: string) => emit("update:modelValue", val),
});
</script>

<template>
  <div class="textbox">
    <label v-if="label" class="textbox-label">
      {{ label }}
    </label>

    <input
      class="textbox-input"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="value"
    />

    <p v-if="error" class="textbox-error">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.textbox {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.textbox-label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.textbox-input {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;
}

.textbox-input:focus {
  border-color: #42b883;
}

.textbox-input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.textbox-error {
  font-size: 13px;
  color: #e53935;
}
</style>
``
