<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input
            id="name"
            type="text"
            :class="{invalid: $v.title.$dirty && !$v.title.required}"
            v-model="title"
          />
          <label for="name">Название</label>
          <span
            v-if="$v.title.$dirty && !$v.title.required"
            class="helper-text invalid"
          >Введите название категории</span>
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model="limit"
            :class="{invalid: $v.limit.$dirty && !$v.limit.minValue}"
          />
          <label for="limit">Лимит</label>
          <span
            v-if="$v.limit.$dirty && !$v.limit.minValue"
            class="helper-text invalid"
          >Минимальная величина {{$v.limit.$params.minValue.min}}</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minValue } from "vuelidate/lib/validators";
export default {
  name: "CategoryCreacte",
  data() {
    return {
      title: "",
      limit: 1
    };
  },
  validations: {
    title: { required },
    limit: { minValue: minValue(100) }
  },
  mounted() {
    // метод materialize который убирает изначальный баг с input label если значение не пусто
    M.updateTextFields();
  },
  methods: {
    submitHandler() {
      // console.log(this.$v.limit);

      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
    }
  }
};
</script>

<style scoped>
</style>
