<template>
  <ul class="tag-list">
    <li
      v-for="tag in tags"
      v-if="tag.name"
      :key="tag.id"
      class="tag-list-item">
      <!--<a href="">{{tag.alias}}</a>-->
      <router-link
        :to="getTagLink(tag)"
        class="tag_list-item__router">{{ tag.alias }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TagList',
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getTagLink(tag) {
      if (tag.name) {
        return { name: 'tag', params: { tagId: tag.id } };
      }
      return { name: 'home' };
    },
  },
};
</script>

<style scoped lang="scss">
.tag-list {
  list-style: none;
  margin: 0;
  padding: 7px 15px;
  background-color: #f2f2f2;
  border-radius: 4px;
}

.tag-list-item {
  display: inline-block;
  margin-right: 15px;
  line-height: 28px;
}

.tag_list-item__router {
  color: #5f5f5f;
  font-size: 13px;
  text-decoration: none;

  &:hover {
    color: #dd5862;
  }
}
</style>
