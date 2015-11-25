TagApiUtil = {

  createTag: function (tags) {
    $.ajax({
      type: 'POST',
      url: '/api/tags',
      dataType: 'json',
      data: { tags: tags },
      success: function (tag) {
        TagApiActions.NewTag();
      }
    });
  },

};
