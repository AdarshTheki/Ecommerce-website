import { config } from '../env-config';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(config.appWriteUrl).setProject(config.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw new Error('createPost: ', error.message);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw new Error('updatePost: ', error.message);
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      throw new Error('deletePost: ', error.message);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      throw new Error('getPost: ', error.message);
    }
  }

  async getPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        queries
      );
    } catch (error) {
      throw new Error('get multiple Posts: ', error.message);
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(config.appWriteBucketId, ID.unique(), file);
    } catch (error) {
      throw new Error('uploadFile: ', error.message);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(config.appWriteBucketId, fileId);
    } catch (error) {
      throw new Error('deleteFile: ', error.message);
    }
  }

  async getFilePreview(fileId) {
    try {
      return await this.bucket.getFilePreview(config.appWriteBucketId, fileId);
    } catch (error) {
      throw new Error('getFilePreview: ', error.message);
    }
  }
}

export const Services = new Service();
