TagApiUtil = {

  createTag: function (tag) {
    $.ajax({
      type: 'POST',
      url: '/api/tags',
      dataType: 'json',
      data: { tag: tag },
      success: function (newTag) {
        TagApiActions.NewTag(newTag);
      }
    });
  },

  deleteTag: function (id) {
    $.ajax({
      type: 'DELETE',
      url: '/api/tags/' + id.id,
      dataType: 'json',
      data: { id: id }
    });
  }

};
