// guvercin.test.js

import { Guvercin, LogLevels } from './guvercin'

describe('Guvercin', () => {
  // Test için kullanılacak bir Guvercin örneği oluşturun
  let logger

  beforeEach(() => {
    // Her test öncesinde yeni bir Guvercin örneği oluşturun
    logger = new Guvercin()
  })

  afterEach(() => {
    // Her test sonrasında Guvercin örneğini temizleyin
    logger = null
  })

  it('log metodu çalışıyor mu?', () => {
    // Log metodu çağrıldığında hiçbir hata almamız gerekiyor
    expect(() => {
      logger.log('Bu bir log mesajıdır.', LogLevels.INFO)
    }).not.toThrow()
  })

  it('info metodu çalışıyor mu?', () => {
    // Info metodu çağrıldığında hiçbir hata almamız gerekiyor
    expect(() => {
      logger.info('Bu bir bilgi mesajıdır.')
    }).not.toThrow()
  })

  it('error metodu çalışıyor mu?', () => {
    // Error metodu çağrıldığında hiçbir hata almamız gerekiyor
    expect(() => {
      logger.error('Bu bir hata mesajıdır.')
    }).not.toThrow()
  })

  it('warning metodu çalışıyor mu?', () => {
    // Warning metodu çağrıldığında hiçbir hata almamız gerekiyor
    expect(() => {
      logger.warning('Bu bir uyarı mesajıdır.')
    }).not.toThrow()
  })

  it('debug metodu çalışıyor mu?', () => {
    // Debug metodu çağrıldığında hiçbir hata almamız gerekiyor
    expect(() => {
      logger.debug('Bu bir hata ayıklama mesajıdır.')
    }).not.toThrow()
  })

  it('success metodu çalışıyor mu?', () => {
    // Success metodu çağrıldığında hiçbir hata almamız gerekiyor
    expect(() => {
      logger.success('Bu bir başarı mesajıdır.')
    }).not.toThrow()
  })

  it('settings metodu çalışıyor mu?', () => {
    // Settings metodu çağrıldığında hiçbir hata almamız gerekiyor
    expect(() => {
      logger.getSettings()
    }).not.toThrow()
  })
})
