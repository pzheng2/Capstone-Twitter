# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151125212121) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "restaurant_tags", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.string  "category"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",               null: false
    t.text     "address",            null: false
    t.string   "phone",              null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",     null: false
    t.integer  "restaurant_id", null: false
    t.string   "title",         null: false
    t.text     "description"
    t.integer  "rating",        null: falseg
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "review_id"
    t.string   "category"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
