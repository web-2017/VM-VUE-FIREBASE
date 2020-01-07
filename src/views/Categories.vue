<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CategoryCreacte />
        <CategoryEdit />
      </div>
    </section>
  </div>
</template>
<script>
import CategoryCreacte from "@/components/CategoryCreacte";
import CategoryEdit from "@/components/CategoryEdit";
export default {
  name: "categories",
  components: {
    CategoryCreacte,
    CategoryEdit
  }
};
</script>
