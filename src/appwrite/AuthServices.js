import { config } from '../env-config';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(config.appWriteUrl).setProject(config.appWriteProjectId);
    this.account = new Account(this.client);
    this.userId = ID.unique();
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(this.userId, email, password, name);
      if (userAccount?.email) {
        // create user verify email to email user
        await this.account.createVerification(this.userId, 'verified');
        alert('send to verify in your email');

        // call to login method to create session method
        await this.login({ email, password });
        // await this.getCurrentUser()
      } else {
        throw new Error('Account creation failed.');
      }
    } catch (error) {
      if (error.code === 'EMAIL_TAKEN') {
        throw new Error('Email is already in use. Please choose another email.');
      } else if (error.code === 'INVALID_EMAIL') {
        throw new Error('Invalid email format. Please check your email address.');
      } else {
        throw new Error('Error creating account: ' + error.message);
      }
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw new Error('Error logging in: ' + error.message);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw new Error('Error getting current user: ' + error.message);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw new Error('Error logging out: ' + error.message);
    }
  }

  async verificationYourEmail() {
    try {
      return await this.account.createVerification(this.userId);
    } catch (error) {
      throw new Error('Error logging out: ' + error.message);
    }
  }
}

export const AuthServices = new AuthService();
