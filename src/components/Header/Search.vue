<template>
  <form id="search-form">
    <input type="text" id="search-query-nav" class="search-query" aria-label="搜索" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="">
    <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Arial; font-size: 13.3333px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
  </form>
</template>

<style lang='scss' scoped>
  .search-query{
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 15px 0 30px;
    border: 1px solid #e3e3e3;
    color: #273849;
    outline: none;
    border-radius: 15px;
    margin-right: 10px;
    transition: border-color .2s ease;
    background: #fff url("../../assets/search.png") 8px 5px no-repeat;
    background-size: 20px;
    vertical-align: middle !important;
  }
</style>
