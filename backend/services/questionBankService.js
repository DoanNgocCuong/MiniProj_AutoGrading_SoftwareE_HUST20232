const QuestionBank = require('../models/QuestionBank');

class QuestionBankService {
  async createQuestionBank(questionBankData, userId) {
    const questionBank = new QuestionBank(
      null, // bankId will be generated by the database
      questionBankData.bankName,
      questionBankData.description,
      userId // Set the createdBy field to the current user's ID
    );
    return await QuestionBank.create(questionBank);
  }

  async getQuestionBankById(id) {
    return await QuestionBank.getById(id);
  }

  async updateQuestionBank(id, questionBank) {
    return await QuestionBank.update(id, questionBank);
  }

  async deleteQuestionBank(id) {
    await QuestionBank.delete(id);
  }
}

module.exports = new QuestionBankService();