RestaurantTagApiUtil = {
  createTag: function (restaurantTag) {
    $.ajax({
      type: 'POST',
      url: '/api/restaurant_tags',
      dataType: 'json',
      data: { restaurant_tag: restaurantTag },
      success: function (newTag) {
        TagActions.NewTag(newTag);
      }
    });
  },
};
