import React, { useState } from 'react';
import { ArrowLeft, Upload, Plus, X, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const AddVlog = () => {
  const [tags, setTags] = useState<string[]>(['']);

  const addTag = () => {
    setTags([...tags, '']);
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const updateTag = (index: number, value: string) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/vlogs" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Add New Vlog</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <form className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Basic Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vlog Title
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter vlog title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter vlog description"
              />
            </div>
          </div>

          {/* Video Upload */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Video Upload</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
              <div className="flex flex-col items-center justify-center">
                <Video className="h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Drag and drop your video here, or click to select</p>
                <p className="text-xs text-gray-500 mt-1">MP4, MOV up to 2GB</p>
                <button
                  type="button"
                  className="mt-4 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
                >
                  Select Video
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Thumbnail</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
              <div className="flex flex-col items-center justify-center">
                <Upload className="h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Upload a thumbnail image</p>
                <p className="text-xs text-gray-500 mt-1">16:9 ratio recommended, PNG, JPG up to 2MB</p>
                <button
                  type="button"
                  className="mt-4 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
                >
                  Select Thumbnail
                </button>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Tags</h2>
            
            {tags.map((tag, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => updateTag(index, e.target.value)}
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Add a tag"
                />
                {tags.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
            
            <button
              type="button"
              onClick={addTag}
              className="text-yellow-600 hover:text-yellow-700 text-sm font-medium flex items-center gap-1"
            >
              <Plus className="h-4 w-4" />
              Add Another Tag
            </button>
          </div>

          {/* Publishing Options */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Publishing</h2>
            
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="publish"
                  className="form-radio text-yellow-500 focus:ring-yellow-500"
                />
                <span className="ml-2">Publish now</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="draft"
                  className="form-radio text-yellow-500 focus:ring-yellow-500"
                />
                <span className="ml-2">Save as draft</span>
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <Link
              to="/vlogs"
              className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-sm font-medium"
            >
              Create Vlog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVlog;